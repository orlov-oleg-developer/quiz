import { createRoot } from "react-dom/client";
import './app/styles/index.scss'
import App from "./app/App";
import { StoreProvider } from "./app/providers/StoreProvider/ui/StoreProvider";

const root = document.getElementById('root')

if (!root) {
    throw new Error('root not found')
}

const container = createRoot(root)

container.render(
    <StoreProvider>
        <App />
    </StoreProvider>
)