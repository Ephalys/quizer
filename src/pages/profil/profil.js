import React from "react";
import { useSelector } from "react-redux";
import history from "config/history";
import Category from "components/category/category";
import { Container, HomeButton, CategoryWrapper, Subtitle, ScoreContainer, ScoreCategory, Score } from "./profilStyles";

const Profil = () => {
    let username = useSelector((state) => state.username.username);
    let scoreTable = useSelector((state) => state.score.scoreTable);
    let favoritesCategories = useSelector(
        (state) => state.category.FavoritesCategories
    );

    const handleRedirectHome = () => {
        history.push("/");
    };

    return (
        <Container exit="hidden">
            <HomeButton onClick={handleRedirectHome}>{"< Home"}</HomeButton>

            <h1>Hello, {username} !</h1>

            <Subtitle>
                Favorites categories
            </Subtitle>
            <CategoryWrapper>
                {favoritesCategories.map((c) => (
                    <Category category={c} key={c.id} />
                ))}
            </CategoryWrapper>
            <Subtitle>
                Last Scores
            </Subtitle>
            {scoreTable.map((s, index) => (
                <ScoreContainer key={index}>
                    <Score>{s.goodAnswerCount} / {s.questCount}</Score>
                    <ScoreCategory>{s.category}</ScoreCategory>
                </ScoreContainer>
            ))}
        </Container>
    );
};

export default Profil;
