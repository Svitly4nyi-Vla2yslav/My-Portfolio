import { Container, Button } from "./Resume.styled"

const Resume = () => {
    return (
        <Container>
            <Button
                href="https://drive.google.com/file/d/17g1jCN4jM9YsgwWspc1apEfJ53_w6bOs/view?usp=sharing"
            >
                Download CV
            </Button>
            <Button
                href='https://drive.google.com/file/d/16D179v6Hvdi0UrjCJghhLy6Tkdw_OBVR/view?usp=sharing'>
                Lebenslauf </Button>
        </Container>
    )
}

export default Resume;