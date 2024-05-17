// vite.config.js
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { readdir, rm, writeFile } from "fs/promises";
var vite_config_default = defineConfig({
  root: "app",
  build: {
    outDir: "../static/svelte",
    emptyOutDir: true,
    assetsDir: ""
  },
  server: {
    port: 4200
  },
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true
      }
    }),
    syncToHugo()
  ]
});
function syncToHugo() {
  return {
    closeBundle: async () => {
      const svelteBuild = "./static/svelte";
      const assets = await readdir(svelteBuild);
      const js = assets.filter((name) => name.match(/(index.)(?!.*?esm)(?!.*?css).*\w+/))[0];
      const css = assets.filter((name) => name.includes(".css"))[0];
      await Promise.all([
        writeFile(`./data/svelte.json`, JSON.stringify({ js, css })),
        rm("./static/svelte/index.html")
      ]);
      console.log(`wrote ${js} to hugo data`);
    }
  };
}
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFwwMC1HYXV0YW0tTXktRmlsZXNcXFxcZ2l0aHViLXJlcG9zXFxcXFNFUlZFUi1YLTEwMVxcXFxTRVJWRVItWFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcMDAtR2F1dGFtLU15LUZpbGVzXFxcXGdpdGh1Yi1yZXBvc1xcXFxTRVJWRVItWC0xMDFcXFxcU0VSVkVSLVhcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6LzAwLUdhdXRhbS1NeS1GaWxlcy9naXRodWItcmVwb3MvU0VSVkVSLVgtMTAxL1NFUlZFUi1YL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHsgc3ZlbHRlIH0gZnJvbSAnQHN2ZWx0ZWpzL3ZpdGUtcGx1Z2luLXN2ZWx0ZSdcclxuaW1wb3J0IHsgcmVhZGRpciwgcm0sIHdyaXRlRmlsZSB9IGZyb20gJ2ZzL3Byb21pc2VzJztcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7IFxyXG4gIHJvb3Q6ICdhcHAnLFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBvdXREaXI6ICcuLi9zdGF0aWMvc3ZlbHRlJyxcclxuICAgIGVtcHR5T3V0RGlyOiB0cnVlLFxyXG4gICAgYXNzZXRzRGlyOiAnJyxcclxuICAgIC8vIHNvdXJjZW1hcDogJ2lubGluZScsIC8vIGVuYWJsZSBmb3IgZGVidWdnaW5nXHJcbiAgfSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIHBvcnQ6IDQyMDAsXHJcbiAgfSxcclxuICBwbHVnaW5zOiBbXHJcbiAgICBzdmVsdGUoe1xyXG4gICAgICBjb21waWxlck9wdGlvbnM6IHtcclxuICAgICAgICBjdXN0b21FbGVtZW50OiB0cnVlLFxyXG4gICAgICB9LFxyXG4gIH0pLFxyXG4gICAgc3luY1RvSHVnbygpXHJcbiAgXVxyXG59KVxyXG5cclxuZnVuY3Rpb24gc3luY1RvSHVnbygpIHtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGNsb3NlQnVuZGxlOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHN2ZWx0ZUJ1aWxkID0gJy4vc3RhdGljL3N2ZWx0ZSc7XHJcbiAgICAgIGNvbnN0IGFzc2V0cyA9IGF3YWl0IHJlYWRkaXIoc3ZlbHRlQnVpbGQpO1xyXG4gICAgICBjb25zdCBqcyA9IGFzc2V0cy5maWx0ZXIobmFtZSA9PiBuYW1lLm1hdGNoKC8oaW5kZXguKSg/IS4qP2VzbSkoPyEuKj9jc3MpLipcXHcrLykpWzBdO1xyXG4gICAgICBjb25zdCBjc3MgPSBhc3NldHMuZmlsdGVyKG5hbWUgPT4gbmFtZS5pbmNsdWRlcygnLmNzcycpKVswXTtcclxuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgIHdyaXRlRmlsZShgLi9kYXRhL3N2ZWx0ZS5qc29uYCwgSlNPTi5zdHJpbmdpZnkoeyBqcywgY3NzIH0pKSxcclxuICAgICAgICBybSgnLi9zdGF0aWMvc3ZlbHRlL2luZGV4Lmh0bWwnKVxyXG4gICAgICBdKTtcclxuICAgICAgY29uc29sZS5sb2coYHdyb3RlICR7anN9IHRvIGh1Z28gZGF0YWApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW9XLFNBQVMsb0JBQW9CO0FBQ2pZLFNBQVMsY0FBYztBQUN2QixTQUFTLFNBQVMsSUFBSSxpQkFBaUI7QUFHdkMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsYUFBYTtBQUFBLElBQ2IsV0FBVztBQUFBLEVBRWI7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxpQkFBaUI7QUFBQSxRQUNmLGVBQWU7QUFBQSxNQUNqQjtBQUFBLElBQ0osQ0FBQztBQUFBLElBQ0MsV0FBVztBQUFBLEVBQ2I7QUFDRixDQUFDO0FBRUQsU0FBUyxhQUFhO0FBRXBCLFNBQU87QUFBQSxJQUNMLGFBQWEsWUFBWTtBQUN2QixZQUFNLGNBQWM7QUFDcEIsWUFBTSxTQUFTLE1BQU0sUUFBUSxXQUFXO0FBQ3hDLFlBQU0sS0FBSyxPQUFPLE9BQU8sVUFBUSxLQUFLLE1BQU0sbUNBQW1DLENBQUMsRUFBRTtBQUNsRixZQUFNLE1BQU0sT0FBTyxPQUFPLFVBQVEsS0FBSyxTQUFTLE1BQU0sQ0FBQyxFQUFFO0FBQ3pELFlBQU0sUUFBUSxJQUFJO0FBQUEsUUFDaEIsVUFBVSxzQkFBc0IsS0FBSyxVQUFVLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQztBQUFBLFFBQzNELEdBQUcsNEJBQTRCO0FBQUEsTUFDakMsQ0FBQztBQUNELGNBQVEsSUFBSSxTQUFTLGlCQUFpQjtBQUFBLElBQ3hDO0FBQUEsRUFDRjtBQUNGOyIsCiAgIm5hbWVzIjogW10KfQo=
