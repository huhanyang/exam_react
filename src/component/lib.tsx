import React from "react";
import {Spin, Typography} from "antd";
import styled from "@emotion/styled";

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Page = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FullPageLoading = () => (
    <FullPage>
        <Spin size={"large"}/>
    </FullPage>
);

export const PageLoading = () => (
    <Page>
        <Spin size={"large"}/>
    </Page>
);

export const FullPageErrorFallback = ({error}: { error: Error | null }) => (
    <FullPage>
        <ErrorBox error={error}/>
    </FullPage>
);

// 类型守卫
const isError = (value: any): value is Error => value?.message;

export const ErrorBox = ({error}: { error: unknown }) => {
    if (isError(error)) {
        return <Typography.Text type={"danger"}>{error?.message}</Typography.Text>;
    }
    return null;
};
