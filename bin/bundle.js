const {build} = await import('esbuild')
await build({
  bundle: true,
  entryPoints: ['./src/**/*.ts'],
  external: [],
  format: 'esm',
  inject: ['./bin/cjs-shims.js'],
  loader: {'.node': 'copy'},
  outdir: './dist',
  platform: 'node',
  plugins: [],
  splitting: true,
  treeShaking: true,
})
