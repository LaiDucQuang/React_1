import { useNavigate } from "react-router-dom";

function GoBack(){
    const naviGate = useNavigate();
    const handleGoBack = () => {
        naviGate(-1);
    };
    return(
        <>
        <button onClick={handleGoBack}>Trở lại</button>
        </>
    )
}
export default GoBack;
// This component is intentionally left empty as a placeholder for future functionality.