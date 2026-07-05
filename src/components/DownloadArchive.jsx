import { Download, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import SoftAurora from './SoftAurora';
import Footer from './Footer';

const releases = [
    {
        version: 'V1.0.0',
        date: '2026-07-3',
        url: 'https://github.com/TheApparition1/Sonora-Music/releases/download/V1.0.0/Sonora.1.0.-.Apple.Silicon.dmg',
        filename: 'Sonora.1.0.-.Apple.Silicon.dmg',
        description: 'Initial release with core features'
    },
    {
        version: 'V1.1.0 - Latest',
        date: '2026-07-5',
        url: 'https://github.com/TheApparition1/Sonora-Music/releases/download/V1.0.1/Sonora.Music.-.1.1.0.dmg',
        filename: 'Sonora.1.0.1.-.Apple.Silicon.dmg',
        description: 'Added shuffle, repeat modes and custom logo. '
    }
];

function DownloadArchive() {
    const sortedReleases = [...releases].sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });

    return (
        <div style={{position: 'relative', minHeight: '100vh', overflow: 'hidden'}}>
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

            <div style={{
                position: 'relative',
                zIndex: 1,
                minHeight: '100vh',
                padding: '24px',
                color: 'white'
            }}>
            <h1 style={{
                fontSize: '48px',
                fontWeight: 'bold',
                marginBottom: '32px',
                paddingBottom: '32px',
                textAlign: 'center'
            }}>
                Download Archive
            </h1>
            
            <div style={{maxWidth: '800px', margin: '0 auto'}}>
                {sortedReleases.map((release) => (
                    <div key={release.version} style={{
                        backgroundColor: 'rgba(255,255,255,0.05)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '16px',
                        padding: '24px',
                        marginBottom: '16px',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '12px'
                        }}>
                            <h2 style={{fontSize: '24px', fontWeight: '600'}}>
                                {release.version}
                            </h2>
                            <div style={{display: 'flex', gap: '16px', color: '#d1d5db'}}>
                                <span style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
                                    <Calendar size={16} />
                                    {release.date}
                                </span>
                            </div>
                        </div>
                        
                        <p style={{color: '#d1d5db', marginBottom: '16px'}}>
                            {release.description}
                        </p>
                        
                        <button
                            onClick={() => {
                                const link = document.createElement('a');
                                link.href = release.url;
                                link.download = release.filename;
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                backgroundColor: '#cba6f7',
                                color: '#1e1e2e',
                                padding: '12px 24px',
                                borderRadius: '8px',
                                fontWeight: '600',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'backgroundColor 0.3s'
                            }}
                        >
                            <Download size={20} />
                            Download
                        </button>
                    </div>
                ))}
            </div>
            
            <div style={{textAlign: 'center', marginTop: '32px'}}>
                <Link to="/" style={{
                    color: '#cba6f7',
                    textDecoration: 'none'
                }}>
                    ← Back to Home
                </Link>
            </div>
            <Footer />
            </div>
        </div>
    );
}

export default DownloadArchive;
