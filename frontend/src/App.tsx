import { Layout } from "@/components/layout"
import { ThemeProvider } from "@/store/uiStore.ts"

export default function App() {
    return (
        <>
            <ThemeProvider />
            <div className="bg-bg-primary dark:bg-dark-bg-primary text-text-primary dark:text-dark-text-primary h-screen w-full transition-colors duration-300">
                <Layout />
            </div>
        </>
    )
}
