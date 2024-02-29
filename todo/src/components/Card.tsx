// Card.js
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";

// type CardProps = {
//     content: string;
// };


export default function BasicCard() {
    return (
        <Card className={`w-28`}>
            <CardContent>
                <h2>タイトル</h2>
            </CardContent>
        </Card>

    );
}
