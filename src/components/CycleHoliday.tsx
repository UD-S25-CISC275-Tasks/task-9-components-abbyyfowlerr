import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = '🎄' | '🎃' | "💌" | '🦃' | '🥮';

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🦃");

    const HOLIDAYS_BY_YEAR: Record<Holiday, Holiday> = {
        '🎄': "💌",
        "💌": '🥮',
        '🥮': '🎃',
        '🎃': '🦃',
        '🦃': '🎄'
    }

    const HOLIDAYS_BY_ALPHABET: Record<Holiday, Holiday> = {
        '🎄': '🎃',
        '🎃': '🥮',
        '🥮': '🦃',
        '🦃': "💌",
        "💌": '🎄'
    }



    return (
        <div>
            <div>
                <Button
                    onClick={() => {setHoliday(HOLIDAYS_BY_ALPHABET[holiday])}}>
                    Alphabet
                </Button>
                <Button onClick={() => {setHoliday(HOLIDAYS_BY_YEAR[holiday])}}>
                    Year
                </Button>
            </div>
            <div>Holiday: {holiday}</div>
        </div>
    );
}
