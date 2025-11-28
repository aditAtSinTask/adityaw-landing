import withNuxt from '@nuxt/eslint/config';

export default withNuxt({
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off'
  }
});
