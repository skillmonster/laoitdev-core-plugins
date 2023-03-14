import { IResourceComponentsProps } from "@refinedev/core";
import { <%- (_app.inferencer.componentPrefix || "") _%>CreateInferencer } from "@refinedev/inferencer/<%- (_app.inferencer.folder || "") _%>";

export const ProductCreate: React.FC<IResourceComponentsProps> = () => {
    return <<%- (_app.inferencer.componentPrefix || "") _%>CreateInferencer />;
};