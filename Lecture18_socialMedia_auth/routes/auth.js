const GitHubStrategy = require('passport-github').Strategy;
const passport = require('passport');

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: '/auth/github/callback'
}, async (accessToken, refreshToken, profile, done) => {
    try {
        // Check if user already exists
        let existingUser = await User.findOne({ providerId: profile.id, provider: 'github' });

        if (existingUser) {
            return done(null, existingUser);
        }

        // If not, create new user
        const newUser = new User({
            name: profile.displayName || profile.username,
            email: profile.emails?.[0]?.value || '',
            provider: 'github',
            providerId: profile.id,
            profilePhoto: profile.photos?.[0]?.value || ''
        });

        await newUser.save();
        return done(null, newUser);
    } catch (err) {
        return done(err, null);
    }
}));

// Serialize and deserialize user
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err, null);
    }
});
