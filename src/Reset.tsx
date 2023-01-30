import { Button } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

export const Reset: React.FC<{ handleReset: () => void }> = ({
  handleReset,
}) => {
  return (
    <div>
      <Button className="reset" onClick={handleReset} variant="outlined">
        <RestartAltIcon></RestartAltIcon>
      </Button>
    </div>
  );
};

export default Reset;
