import React from "react";
import TileCard from "./TileCard";

function TileSection() {
    return (
        <div className="my-6">
            <h2 className="text-xl font-bold mb-4">Sprawdź się</h2>
            <div className="flex flex-col md:flex-row gap-4">
                <TileCard
                    image="/images/jazda1.jpg"
                    title="Przykładowe Jazdy (wideo)"
                    description="Obejrzyj filmiki z przykładowych jazd z objaśnieniem"
                    onClick={()=>alert("Otwórz filmy")}
                />
                <TileCard
                    image="/images/jazda2.jpg"
                    title="Umów jazdę"
                    description="Umów się na jazdę z intruktorem"
                    onClick={()=>alert("Otwórz rezerwacje")}
                />
            </div>
        </div>
    )
}

export default TileSection;