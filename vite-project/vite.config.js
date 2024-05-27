/* File: vite.config.js */
/* Student: Vandelise Vanna Schumack */
/* Student ID: 301336905 */
/* Date: 2024-05-26 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
