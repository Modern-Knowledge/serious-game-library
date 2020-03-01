const tasks = arr => arr.join(' && ')

module.exports = {
    'hooks': {
        'pre-commit': tasks([
            'cd ../serious-game-frontend && npm run build',
            'cd ../serious-game-backend && npm run build'
        ])
    }
}