import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react-swc'
import { configDotenv as dotenv } from "dotenv";
import * as path from "node:path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // 현재 모드에 맞는 환경 변수 로드
  const envPath = path.resolve(new URL(import.meta.url).pathname, `.env.${mode}`)
  dotenv({ path: envPath })
  const env = loadEnv(mode, process.cwd(), '')

  console.log("이름:", env.VITE_ENV)
  console.log("포트:", env.VITE_PORT)
  console.log("API_URL:", env.VITE_API_URL)

  const serverPort:number= Number(env.VITE_PORT)

  return { 
    plugins: [react()],
    server: {
      port: serverPort
    },
    build: {
      rollupOptions: {
        input: {
          main: '/index.html', // 모든 모드에서 항상 src/index.html을 사용
        }
      }
    },
  }
});