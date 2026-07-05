import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import SoftAurora from './components/SoftAurora';
import {Zap, Lock, Cpu, Monitor, HardDrive, UserStar, AppWindowMac, GitPullRequestCreate} from "lucide-react";
import AnimatedContent from './components/AnimatedContent';
import DownloadArchive from './components/DownloadArchive';
import Footer from './components/Footer';

function AppWrapper() {
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransitionStage] = useState('fade-in');
    const isTransitioning = useRef(false);

    useEffect(() => {
        if (location !== displayLocation && !isTransitioning.current) {
            isTransitioning.current = true;
            setTransitionStage('fade-out');
            
            const timer = setTimeout(() => {
                setDisplayLocation(location);
                setTransitionStage('fade-in');
                isTransitioning.current = false;
            }, 300);
            
            return () => clearTimeout(timer);
        }
    }, [location, displayLocation]);

    return (
        <div style={{
            opacity: transitionStage === 'fade-in' ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out'
        }}>
            <Routes location={displayLocation}>
                <Route path="/" element={
                    <div>
                        {/* Solid background color */}
                        <div style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#1e1e2e',
                            zIndex: -2
                        }}/>

                        {/* Soft Aurora Background */}
                        <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1}}>
                            <SoftAurora
                                speed={0.6}
                                scale={1.5}
                                brightness={0.8}
                                color1="#cba6f7"
                                color2="#89b4fa"
                                noiseFrequency={2.5}
                                noiseAmplitude={1.0}
                                bandHeight={0.5}
                                bandSpread={1.0}
                                octaveDecay={0.1}
                                layerOffset={0}
                                colorSpeed={1.0}
                                enableMouseInteraction={false}
                                mouseInfluence={0.25}
                            />
                        </div>
                        <div style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backdropFilter: 'blur(75px)',
                            webkitBackdropFilter: 'blur(75px)',
                            zIndex: 0,
                            pointerEvents: 'none',
                            background: 'transparent',
                        }}/>

                        {/*  Sonora Music Header */}
                        <div style={{
                            position: 'relative',
                            zIndex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minHeight: '70vh',
                            padding: '24px',
                            textAlign: 'center'
                        }}>
                            <h1 style={{
                                fontSize: '72px',
                                fontWeight: 'bold',
                                color: 'white',
                                marginBottom: '32px',
                                letterSpacing: '-0.02em',
                                paddingTop: '24px'
                            }}>
                                Sonora Music
                            </h1>
                            <p style={{
                                fontSize: '22px',
                                color: '#d1d5db',
                                marginBottom: '48px',
                                maxWidth: '600px',
                                lineHeight: 1.6
                            }}>
                                A simple macOS native music player for your local files.
                                Windows Support is currently being considered.
                            </p>
                            <button
                                onClick={() => {
                                    const link = document.createElement('a');
                                    link.href = "https://github.com/TheApparition1/Sonora-Music/releases/download/V1.0.0/Sonora.1.0.-.Apple.Silicon.dmg";
                                    link.download = "Sonora.1.0.-.Apple.Silicon.dmg";
                                    document.body.appendChild(link);
                                    link.click();
                                    document.body.removeChild(link);
                                }}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '12px',
                                    backgroundColor: '#cba6f7',
                                    padding: '16px 32px',
                                    fontSize: '18px',
                                    fontWeight: '600',
                                    color: '#1e1e2e',
                                    textDecoration: 'none',
                                    transition: 'backgroundColor 0.3s, transform 0.2s',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontFamily: 'inherit',
                                    outline: 'none',
                                    background: '#cba6f7'
                                }}
                            >
                                Download for macOS
                            </button>
                            <div style={{marginTop: '16px'}}>
                                <Link to="/archive" style={{
                                    color: '#cba6f7',
                                    textDecoration: 'none',
                                    fontSize: '14px'
                                }}>
                                    View older releases →
                                </Link>
                            </div>
                        </div>

                        {/* Info Section */}
                        <div id="why-sonora" style={{
                            position: 'relative',
                            zIndex: 1,
                            padding: '96px 24px',
                            maxWidth: '1280px',
                            margin: '0 auto'
                        }}>
                            <h2 style={{
                                fontSize: '36px',
                                fontWeight: 'bold',
                                color: 'white',
                                marginBottom: '32px',
                                textAlign: 'center'
                            }}>
                                Why Sonora?
                            </h2>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                gap: '24px'
                            }}>
                                <AnimatedContent
                                    direction="vertical"
                                    distance={30}
                                    duration={1.2}
                                    delay={0}
                                >
                                    <div style={{
                                        backgroundColor: 'rgba(255,255,255,0.05)',
                                        backdropFilter: 'blur(10px)',
                                        borderRadius: '16px',
                                        padding: '20px',
                                        paddingBottom: '32px',
                                        border: '1px solid rgba(255,255,255,0.1)'
                                    }}>
                                        <div style={{color: '#cba6f7', marginBottom: '16px'}}>
                                            <Cpu size={32}/>
                                        </div>

                                        <h3 style={{
                                            fontSize: '24px',
                                            fontWeight: '600',
                                            color: 'white',
                                            marginBottom: '12px'
                                        }}>
                                            Simple & Native
                                        </h3>
                                        <p style={{color: '#d1d5db', lineHeight: 1.6}}>
                                            Built with Tauri for a truly native macOS experience without the bloat of Electron.
                                            It is optimised to be lightweight and space-efficient.
                                        </p>
                                    </div>
                                </AnimatedContent>

                                <AnimatedContent
                                    direction="vertical"
                                    distance={30}
                                    duration={0.8}
                                    delay={0.1}
                                >
                                    <div style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                        backdropFilter: 'blur(10px)',
                                        borderRadius: '16px',
                                        padding: '20px',
                                        paddingBottom: '32px',
                                        border: '1px solid rgba(255,255,255,0.1)'
                                    }}>
                                        <div style={{color: '#cba6f7', marginBottom: '16px'}}>
                                            <Zap size={32}/>
                                        </div>

                                        <h3 style={{
                                            fontSize: '24px',
                                            fontWeight: '600',
                                            color: 'white',
                                            marginBottom: '12px'
                                        }}>
                                            Lightning Fast and Lightweight
                                        </h3>
                                        <p style={{color: '#d1d5db', lineHeight: 1.6}}>
                                            I built Sonora to be extremely fast and lightweight. It uses Apple's own AVFoundation
                                            framework
                                            to handle audio playback, for minimal overhead and optimal performance.
                                        </p>
                                    </div>
                                </AnimatedContent>

                                <AnimatedContent
                                    direction="vertical"
                                    distance={30}
                                    duration={0.8}
                                    delay={0.2}
                                >
                                    <div style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                        backdropFilter: 'blur(10px)',
                                        borderRadius: '16px',
                                        padding: '20px',
                                        paddingBottom: '32px',
                                        border: '1px solid rgba(255, 255, 255, 0.1)'
                                    }}>
                                        <div style={{color: '#cba6f7', marginBottom: '16px'}}>
                                            <Lock size={32}/>
                                        </div>

                                        <h3 style={{
                                            fontSize: '24px',
                                            fontWeight: '600',
                                            color: 'white',
                                            marginBottom: '12px'
                                        }}>
                                            Local Only Application
                                        </h3>
                                        <p style={{color: '#d1d5db', lineHeight: 1.6}}>
                                            No cloud sync or accounts involved. Just drag in local music files and you are good to
                                            go!
                                            The UI is similar to Apple Music or Spotify, but without the requirement for internet or
                                            subscriptions.
                                        </p>
                                    </div>
                                </AnimatedContent>
                            </div>
                        </div>
                        {/* System Requirements */}
                        <div style={{
                            position: 'relative',
                            zIndex: 1,
                            padding: '96px 24px',
                            maxWidth: '1280px',
                            margin: '0 auto'
                        }}>
                            <h2 style={{
                                fontSize: '36px',
                                fontWeight: 'bold',
                                color: 'white',
                                marginBottom: '32px',
                                textAlign: 'center'
                            }}>
                                System Requirements
                            </h2>
                            <AnimatedContent direction="vertical" distance={30} duration={0.8} delay={0}>
                                <div style={{
                                    backgroundColor: 'rgba(255,255,255,0.05)',
                                    backdropFilter: 'blur(10px)',
                                    borderRadius: '16px',
                                    padding: '32px',
                                    border: '1px solid rgba(255,255,255,0.1)'
                                }}>
                                    {/* OS Reqs */}
                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                        gap: '24px'
                                    }}>
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            gap: '16px',
                                            textAlign: 'center'
                                        }}>
                                            <Monitor style={{color: '#cba6f7'}} size={32}/>
                                            <div>
                                                <h4 style={{
                                                    color: 'white',
                                                    fontSize: '18px',
                                                    fontWeight: '600',
                                                    marginBottom: '4px'
                                                }}>Operating System</h4>
                                                <p style={{color: '#d1d5db', fontSize: '14px'}}>macOS 11.0 (Big Sur) or later</p>
                                            </div>
                                        </div>

                                        {/* CPU Reqs*/}

                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            gap: '16px',
                                            textAlign: 'center'
                                        }}>
                                            <Cpu style={{color: '#cba6f7'}} size={32}/>
                                            <div>
                                                <h4 style={{
                                                    color: 'white',
                                                    fontSize: '18px',
                                                    fontWeight: '600',
                                                    marginBottom: '4px'
                                                }}>Architecture</h4>
                                                <p style={{color: '#d1d5db', fontSize: '14px'}}>Apple Silicon (M1 - M5)</p>
                                            </div>
                                        </div>

                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            gap: '16px',
                                            textAlign: 'center'
                                        }}>
                                            <HardDrive style={{color: '#cba6f7'}} size={32}/>
                                            <div>
                                                <h4 style={{
                                                    color: 'white',
                                                    fontSize: '18px',
                                                    fontWeight: '600',
                                                    marginBottom: '4px'
                                                }}>Storage</h4>
                                                <p style={{color: '#d1d5db', fontSize: '14px'}}>50 - 70 MB free disk space</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedContent>
                        </div>

                        {/* FAQ Section */}
                        <div id="sonora-faq" style={{
                            position: 'relative',
                            zIndex: 1,
                            padding: '96px 24px',
                            maxWidth: '1280px',
                            margin: '0 auto',
                        }}>
                            <h2 style={{
                                fontSize: '36px',
                                fontWeight: 'bold',
                                color: 'white',
                                marginBottom: '32px',
                                textAlign: 'center',
                            }}>
                                Frequently Asked Questions
                            </h2>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                gap: '24px'
                            }}>
                                <AnimatedContent
                                    direction="vertical"
                                    distance={30}
                                    duration={1.2}
                                    delay={0}
                                >
                                    <div style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                        backdropFilter: 'blur(10px)',
                                        borderRadius: '16px',
                                        padding: '20px',
                                        paddingBottom: '32px',
                                        border: '1px solid rgba(255, 255, 255, 0.1)'
                                    }}>
                                        <div style={{color: '#cba6f7', marginBottom: '16px'}}>
                                            <AppWindowMac size={32}/>
                                        </div>

                                        <h3 style={{
                                            fontSize: '24px',
                                            fontWeight: '600',
                                            color: 'white',
                                            marginBottom: '12px'
                                        }}>
                                            Why is Sonora only developed for MacOS?
                                        </h3>
                                        <p style={{color: '#d1d5db', lineHeight: 1.6}}>
                                            Sonora uses an audio framework developed by Apple. This framework doesn't work on windows, however a windows version is in consideration.
                                        </p>
                                    </div>
                                </AnimatedContent>

                                <AnimatedContent
                                    direction="vertical"
                                    distance={30}
                                    duration={1.2}
                                    delay={0}
                                >
                                    <div style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                        backdropFilter: 'blur(10px)',
                                        borderRadius: '16px',
                                        padding: '20px',
                                        paddingBottom: '32px',
                                        border: '1px solid rgba(255, 255, 255, 0.1)'
                                    }}>
                                        <div style={{color: '#cba6f7', marginBottom: '16px'}}>
                                            <UserStar size={32}/>
                                        </div>

                                        <h3 style={{
                                            fontSize: '24px',
                                            fontWeight: '600',
                                            color: 'white',
                                            marginBottom: '12px'
                                        }}>
                                            Why did you build Sonora?
                                        </h3>
                                        <p style={{color: '#d1d5db', lineHeight: 1.6}}>
                                            I built Sonora because I am yet to find a macOS native music player that supports local music files, has a dark pastel theme, uses Apple's AVFramework for speed and is easy to use.
                                        </p>
                                    </div>
                                </AnimatedContent>

                                <AnimatedContent
                                    direction="vertical"
                                    distance={30}
                                    duration={1.2}
                                    delay={0}
                                >
                                    <div style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                        backdropFilter: 'blur(10px)',
                                        borderRadius: '16px',
                                        padding: '20px',
                                        paddingBottom: '32px',
                                        border: '1px solid rgba(255, 255, 255,  0.1)'
                                    }}>
                                        <div style={{color: '#cba6f7', marginBottom: '16px'}}>
                                            <GitPullRequestCreate size={32}/>
                                        </div>

                                        <h3 style={{
                                            fontSize: '24px',
                                            fontWeight: '600',
                                            color: 'white',
                                            marginBottom: '12px'
                                        }}>
                                            Is Sonora Open-Source?
                                        </h3>
                                        <p style={{color: '#d1d5db', lineHeight: 1.6}}>
                                        Yes. Sonora Music is Open-Source under the GPL 3.0 Licence. Feel free to make your own forks, just credit me, Samuel Dingle, as the original creator and abide by GPL 3.0 licence terms.
                                        </p>
                                    </div>
                                </AnimatedContent>

                            </div>

                        </div>
                        <Footer />
                    </div>
                } />
                <Route path="/archive" element={<DownloadArchive />} />
            </Routes>
        </div>
    );
}

function App() {
    return (
        <Router>
            <AppWrapper />
        </Router>
    );
}

export default App;