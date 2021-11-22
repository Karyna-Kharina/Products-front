import { rest } from "msw";
import productFixtures from "../additionalData/fixtures/productFixtures"; // src/mocks/handlers.js

export const handlers = [
    rest.get("http://localhost:9000/api/products", (req, res, ctx) => {
        return res(
            // Respond with a 200 status code
            ctx.status(200),
            ctx.json(productFixtures),
        );
    }),
    rest.post("http://localhost:9000/api/products", (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({  message: "Product is saved" }),
        );
    }),
    rest.delete("http://localhost:9000/api/products/1", (req, res, ctx) => {
        return res(
            // Respond with a 200 status code
            ctx.status(200),
        );
    }),




    rest.post("/login", (req, res, ctx) => {
        // Persist user's authentication in the session
        sessionStorage.setItem("is-authenticated", "true");

        return res(
            // Respond with a 200 status code
            ctx.status(200)
        );
    }),

    rest.get("/user", (req, res, ctx) => {
        // Check if the user is authenticated in this session
        const isAuthenticated = sessionStorage.getItem("is-authenticated");

        if (!isAuthenticated) {
            // If not authenticated, respond with a 403 error
            return res(
                ctx.status(403),
                ctx.json({
                    errorMessage: "Not authorized"
                })
            );
        }

        // If authenticated, return a mocked user details
        return res(
            ctx.status(200),
            ctx.json({
                username: "admin"
            })
        );
    })
];