import './App.css';
import ChatSidePanel from './SideChatBar'; 
import MediaPreviewInterface from './VideoCanvas';
import ManimatorPage from './LandingPage';

// Default export for the App component
export default function App() {
  return (
    
    // Main application container: flex row, full screen width and height
    // <div className="flex w-screen h-screen bg-background text-foreground">
    //   {/* ChatSidePanel component: Takes a fixed width on medium screens and up */}
    //   <ChatSidePanel />
    //   {/* Main content area: Takes the remaining flexible space, allows internal scrolling */}
    //   <div className="flex-1 overflow-auto flex"> {/* Removed p-4, MediaPreviewInterface will handle its own padding */}
    //     {/* MediaPreviewInterface component: Will fill this flex-1 container */}
    //     <MediaPreviewInterface />
    //   </div>
    // </div>
    <ManimatorPage />
  );
}
