import { <%- (_app.inferencer.componentPrefix || "") _%>ListInferencer } from "@refinedev/inferencer/<%- (_app.inferencer.folder || "") _%>";

export default function ProductList() {
    return <<%- (_app.inferencer.componentPrefix || "") _%>ListInferencer />;
}