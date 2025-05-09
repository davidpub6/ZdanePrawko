import React from "react";
import TileCard from "./TileCard";

function TileSection({ title, tiles }) {
    return (
        <div className="my-6">
      {/* Section Title */}
      <h2 className="text-xl font-bold mb-4">{title}</h2>

      {/* Scrollable Tiles */}
      <div className="flex gap-4 overflow-x-auto custom-scrollbar p-3 w-full">
        {tiles.map((tile, index) => (
          <TileCard
            key={index}
            image={tile.image}
            title={tile.title}
            description={tile.description}
            onClick={tile.onClick}
          />
        ))}
      </div>
    </div>
    )
}

export default TileSection;