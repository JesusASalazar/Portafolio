//Idioma
import { useTranslation } from 'react-i18next';

//Esqueleto
import { Layout } from '../Layout';

//Componentes
import { ContentCard } from '../../components/shared/ContentCard';
import { SeparationBar } from '../../components/layout/SeparationBar';
import { Box } from '../../components/shared/Box';
import { TechnologiesList } from '../../components/shared/TechnologiesList';
import { DownloadCVButton } from '../../components/ui/DownloadCVButton';
import { TextBlock } from '../../components/shared/TextBlock'

//Assets
import presentation from '../../assets/img/presentation.jpg';
import background from '../../assets/img/presentation.png';
import portadaImage from '../../assets/img/portada.jpg';
import './home.css';

export const Home = () => {
    const { t } = useTranslation();

    const tPresentation = (key, options) => t(`home.presentation.${key}`, options);
    const tTechnologies = (key, options) => t(`home.technologies.${key}`, options);

    const about = tPresentation("aboutMe", { returnObjects: true });

    return (
        <Layout id="home" backButton={false}>
            <Box id="ported" content={portadaImage}>
                <h1 id="ported-title">portfolio</h1>
                <div>
                    <h2 id="owner">Jesús Alejandro Gómez Salazar</h2>
                    <h2 id="role">{t("home.role")}</h2>
                </div>
            </Box>

            <ContentCard
                id="presentation"
                content="var(--background-light)"
                title={tPresentation("title")}
                text={about}
                main={
                    <div className='main-content'>
                        <div className="experience">{`${t("home.role")} - ${tPresentation('experience')}`}</div>
                        <TextBlock text={about} />
                    </div>
                }
                aside={<img src={presentation} alt={tPresentation("alt")} />}
            />
            

            <SeparationBar id="divider" height="60px" content="var(--cream)">
                <DownloadCVButton />
            </SeparationBar>

            <ContentCard
                id="technologies"
                content={background}
                title={t("home.technologies.title")}
                main={
                    <TechnologiesList
                    stack={tTechnologies("stack")}
                    framework={tTechnologies("framework")}
                    tool={tTechnologies("tools")}
                />
                }
            >
            </ContentCard>
        </Layout>
    );
};
