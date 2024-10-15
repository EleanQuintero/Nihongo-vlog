module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:astro/recommended'
    ],
    plugins: ['@typescript-eslint'],
    overrides: [
      {
        files: ['*.astro'],
        parser: 'astro-eslint-parser',
        extends: ['plugin:astro/recommended'],
      },
    ],
    rules: {
      // Aquí puedes personalizar tus reglas
    },
  };