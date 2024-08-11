{
  targets: {
    install: {
      executor: 'std:commands',
      options: {
        commands: [
          {
            program: 'npm',
            arguments: ['install'],
          },
        ],
      },
      cache: {
        invalidateWhen: {
          inputChanges: ['package.json', 'package-lock.json'],
          filesMissing: ['node_modules']
        },
      },
    },
    build: {
      executor: 'std:commands',
      options: {
        commands: [
          {
            program: 'npm',
            arguments: ['run', 'build'],
          },
        ],
      },
      cache: {
        invalidateWhen: {
          inputChanges: ['src/**', 'tsconfig.json'],
          outputChanges: ['dist/**'],
        },
      },
      dependencies: ['install'],
    },
    publish: {
      executor: {
        url: 'https://github.com/rnza0u/blaze-executors.git',
        path: 'npm-publish',
        format: 'Git',
      },
      options: {},
      dependencies: ['build'],
    },
    clean: {
      executor: 'std:commands',
      options: {
        commands: [
          {
            program: 'rm',
            arguments: ['-rf', 'dist', 'node_modules'],
          },
        ],
      },
    },
  },
}
