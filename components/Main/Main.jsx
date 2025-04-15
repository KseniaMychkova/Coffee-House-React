import Preview from '../../components/Preview/Preview'
import Benefits from '../../components/Benefits/Benefits'
import MobilApps from '../../components/MobilApps/MobilApps'

function Main() {
    return <main style={{display: 'flex', flexDirection: 'column', gap: '100px'}}>
        <Preview />
        <Benefits/>
        <MobilApps/>
    </main>
}

export default Main