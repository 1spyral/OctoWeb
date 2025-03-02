import { Layout } from "@/components/layout"
import { DarkModeProvider } from "@/store/uiStore.ts"

export default function App() {
    return (
        <>
            <DarkModeProvider />
            <div className="h-screen w-full bg-bg-primary text-text-primary transition-colors duration-300 dark:bg-dark-bg-primary dark:text-dark-text-primary">
                <Layout />
            </div>
        </>
    )
}
