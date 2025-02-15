import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from '@mui/material';
import Appbar from './Component/Appbar';
import Sidebar from './Component/Sidebar';
import Today from './Page/Today';
import Important from './Page/Important';
import All_tasks from './Page/All_tasks';
import Planed from './Page/Planed';

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); 

    const handleToggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <Router>
            <Appbar onToggleSidebar={handleToggleSidebar} />
            
            <Box sx={{ display: 'flex',   }}>
                {/* Sidebar */}
                <Box sx={{
                    width: isSidebarOpen ? "240px" : "0px"
                  
                }}>
                    {isSidebarOpen && <Sidebar />}
                </Box>

                {/* Main Content */}
                <Box sx={{
                    flexGrow: 1,
                    padding: 2,
                    transition: "margin 0.3s ease-in-out"
                }}>
                    <Routes>
                        <Route path="/today" element={<Today />} />
                        <Route path="/star" element={<Important />} />
                        <Route path="/task" element={<All_tasks />} />
                        <Route path="/planned" element={<Planed />} />
                    </Routes>
                </Box>
            </Box>
        </Router>
    );
}

export default App;
