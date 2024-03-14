import { IProperty } from "../../properties";
import { Link } from "react-router-dom";
import {
    IoBedOutline,
    IoLayersOutline,
    IoRibbonOutline,
} from "react-icons/io5";

interface IPropertyCardProps {
    property: IProperty;
}
function PropertyCard({ property }: IPropertyCardProps) {
    return (
        <div className="bg-zinc-200 p-4 rounded-sm">
            <div className="w-full mb-6">
                <img
                    src={property.images[0]}
                    alt={property.title}
                    className="w-full h-[250px] object-fill rounded-sm"
                />
            </div>

            <div className="p-4">
                <h3 className="text-xl font-bold mb-4">{property.title}</h3>
                <p className="text-sm">{property.description}</p>
            </div>

            <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-2">
                    <IoBedOutline />
                    <span>{property.beds} beds</span>
                </div>
                <div className="flex items-center gap-2">
                    <IoLayersOutline />
                    <span>{property.baths} baths</span>
                </div>
                <div className="flex items-center gap-2">
                    <IoRibbonOutline />
                    <span>{property.area} sqft</span>
                </div>
            </div>
        </div>
    );
}

export default PropertyCard;
