import { IProperty } from "../../properties";
import PropertyCard from "./PropertyCard";

interface IPropertiesListProps {
    properties: IProperty[];
}

function PropertiesList({ properties }: IPropertiesListProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
            ))}
        </div>
    );
}

export default PropertiesList;
