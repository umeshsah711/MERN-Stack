import dotenv from "dotenv";

dotenv.config();

const config = {
    name: process.env.NAME || "",
    port: process.env.PORT || "",
    version: process.env.VERSION || "",
    feature: {
        admin: {
            enabled: parseInt(process.env.FAILURE_ADMIN_ENABLED) || false,
        },
    },
};

export default config;