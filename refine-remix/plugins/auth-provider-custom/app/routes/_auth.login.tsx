<%_ if (answers["ui-framework"] === 'antd') { _%>
     import { AuthPage } from "@refinedev/antd";
 <%_ } _%>
 <%_ if (answers["ui-framework"] === 'mui') { _%>
     import { AuthPage } from "@refinedev/mui";
 <%_ } _%>
 <%_ if (answers["ui-framework"] === 'mantine') { _%>
     import { AuthPage } from "@refinedev/mantine";
 <%_ } _%>
 <%_ if (answers["ui-framework"] === 'chakra') { _%>
     import { AuthPage } from "@refinedev/chakra-ui";
 <%_ } _%>

export default function Login() {
    return (
        <AuthPage
            type="login"
            formProps={{
                <%_ if (answers["ui-framework"] === 'antd' || answers["ui-framework"] === 'mantine') { _%>
                    initialValues: {
                        email: "admin@refine.dev",
                        password: "demodemo",
                    },
                <%_ } _%>
                <%_ if (answers["ui-framework"] === 'mui' || answers["ui-framework"] === 'chakra') { _%>
                    defaultValues: {
                        email: "admin@refine.dev",
                        password: "demodemo",
                    },
                <%_ } _%>
            }}
        />
    );
}