import type { App } from 'vue';

export default {
    install(app: App<Element>, options: { maxChars?: number, dotsSymbol?: string } = {}) {
        const truncate = (str: string) => {
            if (options.maxChars && str.length > options.maxChars) {
                return str.slice(0, options.maxChars) + (options.dotsSymbol || '...');
            }
            return str;
        }

        app.config.globalProperties.$truncate = truncate;
    }
}
