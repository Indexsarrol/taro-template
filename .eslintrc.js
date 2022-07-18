module.exports = {
    extends: [require.resolve('@umijs/fabric/dist/eslint')],
    rules: {
    // 禁止出现未使用过的变量
        'no-unused-vars': ['error'],
        // 缩进风格
        indent: ['error', 4],
        // 是否应该在行尾使用分号
        semi: ['error', 'always', { omitLastInOneLineBlock: true }],
        // 强制使用一致的单引号
        quotes: ['error', 'single'],
        // 最后一行
        'eol-last': 1,
        // 强制在 JSX 属性中一致地使用双引号或单引号
        'jsx-quotes': ['error', 'prefer-single'],
        // 未重新赋值的变量使用 const 而不是 let
        'prefer-const': 'warn',
        'no-console': ['error', { allow: ['warn', 'error'] }],
    },
};
