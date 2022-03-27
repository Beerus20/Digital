import React from 'react';
import { View, ScrollView } from 'react-native';
import Animated from 'react-native-reanimated';
import styled, { useTheme } from 'styled-components/native'
import { McText, McImage } from 'Components'
import { Images } from 'Constants'

import { dummyData } from 'Mock'
const Conditions = ({ animatedStyle }) => {
    const theme = useTheme()
    return (
        <Animated.View
            style={{
                flex: 1,

                backgroundColor: theme.colors.background,
                paddingTop: 44,
                ...animatedStyle
            }}
        >
            {/* Header Section  */}
            <HeadearSection>
                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 0 }}>
                    <View style={{ flexDirection: "column" }}>
                        <McImage source={Images.logo} style={{ marginBottom: 0 }} />
                        <McText secondary size={17} color={theme.colors.text1} style={{ marginTop: 0 }}>DigitalOfficeTradLTD</McText>
                    </View>
                </View>

                <McImage source={Images.union} style={{ width: 19, height: 19, tintColor: theme.colors.text2 }} />

            </HeadearSection>

            {/* Account OverView  */}

            <HeadearSection style={{ marginTop: 50 }}>
                <McText semi size={24} color={theme.colors.text1} style={{ lineHeight: 30, marginBottom: 8 }}>Terme et Conditions</McText>
            </HeadearSection>
            <ScrollView>
                <HeadearSection>
                    <McText semi size={13} color={theme.colors.text3}>
                        Merci de l’intérêt que vous portez sur notre société. En acceptant ces conditions générales (conditions commerciales) et en vous inscrivant en tant que client, vous acceptez d’être légalement lié par celles-ci, y compris celles incorporées par référence. Veuillez lire attentivement ces conditions. Toute commande passée dans l’un de nos bureaux, par Internet ou par tout autre moyen, constituera un accord contraignant des présentes conditions générales entre le Client et Nous.

                    </McText>
                </HeadearSection>
                <HeadearSection>
                    <McText semi size={13} color={theme.colors.text3}>
                        Si vous n’acceptez pas les termes et conditions énoncés ici sans modification, vous ne pouvez pas utiliser les services. DIGITALOFFICETRAD Ltd peut réviser et sans préavis, ces conditions générales, bouquet de services et le contenu de notre site à tout moment en mettant à jour cette page.
                    </McText>
                </HeadearSection>
                <HeadearSection>
                    <McText semi size={13} h6 color={theme.colors.text3}>
                        Vous devriez visiter cette page périodiquement pour les revoir car elles vous engagent. Dans les présentes conditions générales, “DIGITALOFFICETRAD Ltd”, et tous les services qui s’y rapportent, y compris le texte, les images, les photographies, l’interface utilisateur, les données et tout autre contenu inclus de temps à autre (y compris, sans s’y limiter, la sélection, la coordination et l’arrangement de ce contenu) sont appelés le “Site Web” ou le “Service“. Dans les présentes conditions générales, toute mention de « nous » ou « nos » fait référence a DIGITALOFFICETRAD Ltd.
                    </McText>
                </HeadearSection>

                <HeadearSection style={{ marginTop: 10, marginBottom: 1 }}>
                    <McText semi size={16} color={theme.colors.text2} style={{ marginLeft: 75 }}>Information sur nous </McText>
                </HeadearSection>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginRight: 15 }}>
                    <McText semi size={13} color={theme.colors.text1} style={{ marginRight: 5 }}>
                        . Informations sur notre société:
                    </McText>
                    <McText semi size={13} color={theme.colors.text3} style={{ marginRight: 15 }}>
                        Digitalofficetrad Ltd

                    </McText>

                </View>
                <McText semi size={13} color={theme.colors.text3} style={{ marginLeft: 25 }}>
                    Enregistré en Royaume-Uni et au Pays de Galles – Numéro d’entreprise 13879309
                </McText>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginRight: 15 }}>
                    <McText semi size={13} color={theme.colors.text1} style={{ marginRight: 3 }}>
                        . Notre adresse:
                    </McText>
                    <McText semi size={13} color={theme.colors.text3} style={{ marginRight: 15 }}>
                        85 Great Portland Street, Premier

                    </McText>

                </View>
                <McText semi size={13} color={theme.colors.text3} style={{ marginLeft: 25 }}>
                    étage, Londres, Royaume-Uni
                </McText>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginRight: 15 }}>
                    <McText semi size={13} color={theme.colors.text1} style={{ marginRight: 3 }}>
                        . Notre site Web:
                    </McText>
                    <McText semi size={13} color={theme.colors.text3} style={{ marginRight: 15 }}>
                        https://www.digitalofficetrad.com

                    </McText>

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginRight: 15, marginTop: 10 }}>
                    <McText semi size={13} color={theme.colors.text1} style={{ marginRight: 3 }}>
                        L’accord.
                    </McText>
                    <McText semi size={13} color={theme.colors.text3} style={{ marginRight: 15 }}>
                        Vous confirmez que vous avez l’autorisation

                    </McText>

                </View>
                <McText semi size={13} color={theme.colors.text3} style={{ marginLeft: 25 }}>
                    écrite d’engager toute entreprise ou société au nom de laquelle vous agissez à utiliser notre service.
                </McText>

                <McText semi size={13} color={theme.colors.text3} style={{ marginLeft: 25 }}>
                    Cet accord et notre politique de confidentialité constituent l’intégralité de l’accord entre nous et remplacent tout accord antérieur écrit et oral.
                </McText>
                {/* .............................................. */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginRight: 15, marginTop: 10 }}>
                    <McText semi size={13} color={theme.colors.text1} style={{ marginRight: 3 }}>
                        Notre service.
                    </McText>
                    <McText semi size={13} color={theme.colors.text3} style={{ marginRight: 15 }}>
                        Une fois que votre demande de services

                    </McText>

                </View>
                <McText semi size={13} color={theme.colors.text3} style={{ marginLeft: 25 }}>
                    a été accepté , vous pouvez nous contacter par téléphone, e-mail ou à l’adresse postale affichée sur notre site
                </McText>

                {/* ........................................... */}



                <McText semi size={13} color={theme.colors.text3} style={{ marginLeft: 25 }}>
                    Cet accord et notre politique de confidentialité constituent l’intégralité de l’accord entre nous et remplacent tout accord antérieur écrit et oral.
                    Web pour nous demander si votre demande a été retirée.
                    Compte tenu de la nature des services que nous fournissons, il dépendra de nous seulement si vous avez droit ou non à un remboursement pour ce dernier. Dans cet optique, nous prendrons en considération l’étendue des travaux que nous avons déjà commencés en fonction de la fourniture de ce service ou du paiement de frais de tiers. Étant donné que le service comprend la création d’une entreprise, une fois que la demande d’incorporation a été soumise au Registre des sociétés, il ne sera pas possible d’arrêter le processus de création d’entreprise.
                </McText>


                <McText semi size={13} color={theme.colors.text3} style={{ marginLeft: 25, marginTop: 10, marginBottom: 10 }}>
                    NOTÉ BIEN QU’IL EST DE VOTRE RESPONSABILITÉ DE NOUS FOURNIR UNE ADRESSE POSTALE, UN E-MAIL ET UN NUMÉRO DE TÉLÉPHONE VALABLE POUR QUE NOUS PUISSIONS VOUS FAIRE PARVENIR LES DOCUMENTS AVEC DILIGENCE. Notez que dans le cas des entreprises britanniques et en opposition à ce que de nombreux banquiers ou autres entités réclameront, le document PDF qui vous est envoyé EST TECHNIQUEMENT L’ORIGINAL.
                </McText>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginRight: 15, marginTop: 10 }}>
                    <McText semi size={13} color={theme.colors.text1} style={{ marginRight: 3 }}>
                        Adresse du siège social
                    </McText>
                    <McText semi size={13} color={theme.colors.text3} style={{ marginRight: 31 }}>
                        Notre adresse (lorsque

                    </McText>

                </View>
                <McText semi size={13} color={theme.colors.text3} style={{ marginLeft: 25 }}>
                    commandée et payée)  peut être utilisée comme adresse officielle de votre entreprise (adresse du siège social) auprès de Companies House. Le courrier reçu (courrier officiel) adressé à l’entreprise vous sera transmis gratuitement. Le courrier officiel comprend (et limité à) le courrier de Companies House, HM Revenue & Customs, HM Courts & Tribunals Service et le Service de la propriété intellectuelle.
                </McText>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginRight: 15, marginTop: 10 }}>
                    <McText semi size={13} color={theme.colors.text1} style={{ marginRight: 3 }}>
                        Adresse de service du directeur.
                    </McText>
                    <McText semi size={13} color={theme.colors.text3} style={{ marginRight: 31 }}>
                        Notre adresse (lorsqu’

                    </McText>

                </View>
                <McText semi size={13} color={theme.colors.text3} style={{ marginLeft: 25 }}>
                    elle est commandée et payée) peut être utilisée comme adresse de service d’administrateur pour les administrateurs d’une société à responsabilité limitée lorsqu’une adresse de siège social est également commandée. Le courrier reçu (courrier officiel) adressé aux administrateurs sera réacheminé gratuitement. Le courrier officiel comprend (et s’y limite) le courrier de la Companies House, du HM Revenue & Customs, du HM Courts & Tribunals Service et du Intellectual Property Service.
                </McText>


                <McText semi size={13} color={theme.colors.text1} style={{ marginLeft: 25, marginTop: 10 }}>
                    Comment notre adresse peut être utilisée
                </McText>
                <McText semi size={13} color={theme.colors.text3} style={{ marginLeft: 25, marginTop: 10 }}>
                    Adresse du siège social (lors de la commande)
                </McText>
                <McText semi size={13} color={theme.colors.text3} style={{ marginLeft: 25, marginTop: 10 }}>
                    Adresse de service du directeur (lorsque commandée)
                </McText>


                <McText semi size={13} color={theme.colors.text1} style={{ marginLeft: 25, marginTop: 10 }}>
                    Comment notre adresse ne peut pas être utilisée
                </McText>

                <McText semi size={13} color={theme.colors.text3} style={{ marginLeft: 25, marginTop: 10 }}>
                    Bien que cela vous donne le droit d’inclure notre adresse sur vos en-têtes de lettres et cartes de visite, à moins que vous ne contractiez un service supérieur tel que la réexpédition du courrier ou d’autres correspondances commerciales ou des colis de présence, la réception de votre courrier sera strictement limitée au courrier officiel du gouvernement et à tout événement jusqu’à un maximum de 10 pièces par an.
                </McText>

                <McText semi size={13} color={theme.colors.text3} style={{ marginLeft: 25, marginTop: 10 }}>
                    En aucun cas, notre bureau ou notre site Web ne doit être utilisé sans notre consentement pour l’immatriculation à la TVA, la paie, pour la gestion de publipostages ou pour tout type d’activités et d’entreprises illégales, ou pour la gestion d’entreprises qui sont généralement réglementées sans une licence appropriée. Toute publicité de tout type, y compris l’adresse que nous mettons a votre diposition, autre que la simple liste de votre adresse enregistrée ou de vos cartes de visite devra être dûment approuvée par écrit par nos bureaux.
                </McText>
                <McText semi size={13} color={theme.colors.text1} style={{ marginLeft: 25, marginTop: 10 }}>
                    Utilisation immorale ou illégale.
                </McText>
                <McText semi size={13} color={theme.colors.text3} style={{ marginLeft: 25, marginTop: 10 }}>
                    Notre adresse ne peut PAS être utilisée à des fins immorales ou illégales. Si nous soupçonnons que cela se produit, votre compte sera suspendu dans l’attente d’une enquête plus approfondie ou résilié
                </McText>

                {/* .............................................. */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginRight: 15, marginTop: 10 }}>
                    <McText semi size={13} color={theme.colors.text1} style={{ marginRight: 3 }}>
                        Courrier personnel.
                    </McText>
                    <McText semi size={13} color={theme.colors.text3} style={{ marginRight: 15 }}>
                        Notre adresse ne peut PAS être
                    </McText>

                </View>
                <McText semi size={13} color={theme.colors.text3} style={{ marginLeft: 25 }}>
                    utilisée pour un courrier personnel. Tous les courriers liés à la voiture, par exemple, mais sans s’y limiter : immatriculation du véhicule, permis de conduire, contraventions de stationnement, excès de vitesse, agents de recouvrement/agents d’exécution pour le compte d’amendes impayées, etc., seront renvoyés à l’expéditeur sans notification.
                </McText>

                {/* ........................................... */}
                {/* .............................................. */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginRight: 15, marginTop: 10 }}>
                    <McText semi size={13} color={theme.colors.text1} style={{ marginRight: 3 }}>
                        Adresse physique.
                    </McText>
                    <McText semi size={13} color={theme.colors.text3} style={{ marginRight: 15 }}>
                        Vous ne pouvez PAS insinuer que
                    </McText>

                </View>
                <McText semi size={13} color={theme.colors.text3} style={{ marginLeft: 25 }}>
                    vous avez une présence physique à notre adresse. Nous nous réservons le droit d’informer les visiteurs de nos bureaux que vous n’avez qu’une adresse professionnelle virtuelle.   </McText>

                {/* ........................................... */}

                {/* .............................................. */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginRight: 15, marginTop: 10 }}>
                    <McText semi size={13} color={theme.colors.text1} style={{ marginRight: 3 }}>
                        Catégories d’activités.
                    </McText>
                    <McText semi size={13} color={theme.colors.text3} style={{ marginRight: 15 }}>
                        Nous nous réservons le droit de
                    </McText>

                </View>
                <McText semi size={13} color={theme.colors.text3} style={{ marginLeft: 25 }}>
                    refuser des catégories d’entreprises comme bon nous semble.
                </McText>

                {/* ........................................... */}

                {/* .............................................. */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginRight: 15, marginTop: 10 }}>
                    <McText semi size={13} color={theme.colors.text1} style={{ marginRight: 3 }}>
                        Google.
                    </McText>
                    <McText semi size={13} color={theme.colors.text3} style={{ marginRight: 15 }}>
                        “Google My Business” n’autorise pas l’utilisat
                    </McText>

                </View>
                <McText semi size={13} color={theme.colors.text3} style={{ marginLeft: 25 }}>
                    ion es adresses des agences de réception de courrier comme adresse professionnelle. Nos adresses ne peuvent PAS être utilisées comme votre adresse “Google My Business” .es adresses des agences de réception de courrier comme adresse professionnelle. Nos adresses ne peuvent PAS être utilisées comme votre adresse “Google My Business”
                </McText>

                {/* ........................................... */}

                <McText semi size={13} color={theme.colors.text1} style={{ marginLeft: 25, marginTop: 10 }}>
                    Virements bancaires
                </McText>

                <McText semi size={13} color={theme.colors.text3} style={{ marginLeft: 25, marginTop: 10 }}>
                    Bien que nous n’ayons jamais facturé pour la réception de virements bancaires, vous êtes responsable de vous assurer que le montant total que nous avons demandé nous parvient. Vous êtes responsable de tous les frais de transfert de votre part et en aucun cas nous ne pouvons partager ou payer les frais de transfert.
                </McText>
                <McText semi size={13} color={theme.colors.text3} style={{ marginLeft: 25, marginTop: 10 }}>
                    Si votre paiement final manque de fonds en raison de frais de virement bancaire ou pour toute autre raison, nous vous refuserons de vous envoyer des informations sur les services que vous avez commandés ou, à tout le moins, nous conserverons la pleine propriété de la société ou des services associés jusqu’à l’ajustement. Pour les fonds manquants est fait ou jusqu’à ce que nous acceptons par écrit de renoncer à la différence.
                </McText>
                <McText semi size={13} color={theme.colors.text1} style={{ marginLeft: 25, marginTop: 10 }}>
                    Paiements par carte de crédit ou carte de débit
                </McText>
                <McText semi size={13} color={theme.colors.text3} style={{ marginLeft: 25, marginTop: 10 }}>
                    Nous pouvons accepter les paiements par carte de crédit ou de débit sur Internet. Veuillez éviter d’envoyer les détails de votre carte de crédit par e-mail, car ils sont assez faciles à intercepter. Dans notre cas, les paiements en ligne sont les méthodes les plus sûres pour payer avec des cartes de crédit ou des cartes de débit. Notre système et passerelle de paiement sécurisé par carte de crédit est géré par Stripe et est actuellement un leader de la sécurité Internet en matière de paiements en ligne. Frais, paiements, remboursements, dépôt postal et renouvellements
                </McText>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginRight: 15, marginTop: 10 }}>
                    <McText semi size={13} color={theme.colors.text1} style={{ marginRight: 3 }}>
                        Frais.
                    </McText>
                    <McText semi size={13} color={theme.colors.text3} style={{ marginRight: 85 }}>
                        Les frais sont payables d’avance.
                    </McText>


                </View>
                <McText semi size={13} color={theme.colors.text3} style={{ marginLeft: 25, marginTop: 10 }}>
                    Paiements. Les paiements peuvent être effectués par carte de débit ou de crédit en utilisant notre service de paiement en ligne
                </McText>

                {/* .............................................. */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginRight: 15, marginTop: 10 }}>
                    <McText semi size={13} color={theme.colors.text1} style={{ marginRight: 3 }}>
                        Remboursements.
                    </McText>
                    <McText semi size={13} color={theme.colors.text3} style={{ marginRight: 15 }}>
                        Les remboursements, le cas échéant,
                    </McText>

                </View>
                <McText semi size={13} color={theme.colors.text3} style={{ marginLeft: 25 }}>
                    le cas échéant, seront envoyés dans les 30 jours. Aucun remboursement pour quelque raison que ce soit ne sera pris en compte pour les périodes payées, sauf demande dans les 14 jours suivant la date de la commande. Tous les remboursements seront soumis à des frais de 10 £ ou 10 %, selon le montant le plus élevé. Aucun remboursement n’est disponible si la commande comprenait la formation gratuite d’une société à responsabilité limitée et si la société a été constituée avec succès par nous.
                </McText>

                {/* ........................................... */}

                {/* .............................................. */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginRight: 15, marginTop: 10 }}>
                    <McText semi size={13} color={theme.colors.text1} style={{ marginRight: 3 }}>
                        Transfert de services.
                    </McText>
                    <McText semi size={13} color={theme.colors.text3} style={{ marginRight: 15 }}>
                        Nos services sont vendus par entreprise.
                    </McText>

                </View>
                <McText semi size={13} color={theme.colors.text3} style={{ marginLeft: 25 }}>
                    le cas échéant, seront envoyés dans les 30 jours. Aucun remboursement pour quelque raison que ce soit ne sera pris en compte pour les périodes payées, sauf demande dans les 14 jours suivant la date de la commande. Tous les remboursements seront soumis à des frais de 10 £ ou 10 %, selon le montant le plus élevé. Aucun remboursement n’est disponible si la commande comprenait la formation gratuite d’une société à responsabilité limitée et si la société a été constituée avec succès par nous.
                </McText>

                {/* ........................................... */}

                <HeadearSection style={{ marginTop: 10, marginBottom: 1 }}>
                    <McText semi size={16} color={theme.colors.text2} style={{ marginLeft: 43 }}>Variation des prix et conditions</McText>
                </HeadearSection>
                <McText semi size={13} color={theme.colors.text3} style={{ marginTop: 10, marginLeft: 25 }}>
                    Tous les prix et conditions sont indiqués sur notre site Web, mais nous nous réservons le droit de modifier ces prix et conditions chaque fois que nous le jugeons approprié. Dans la mesure du possible, nous vous avertirons à l’avance des changements, mais en aucun cas cela ne sera une obligation de notre part. Habituellement, les conditions générales sur le site Web seront la dernière version et prévaudront sur toutes les autres conditions générales précédemment publiées ou distribuées.
                </McText>

                <McText semi size={13} color={theme.colors.text3} style={{ marginTop: 10, marginLeft: 25 }}>
                    Selon les modes de paiement dont nous disposons au moment de votre commande, vous pouvez choisir parmi plusieurs modes de paiement tels que le paiement en ligne, avec votre carte de crédit ou de débit (Visa, MasterCard, Maestro, Electron, Amex, Diners, JCB, Discover ou toutes les cartes que nous pouvons accepter au moment de cet accord) Via Stripe et par Cryptomonaie Via Utrust.
                </McText>

                         {/* ------------------------- Transfert courrier ------------------------ */}
            </ScrollView>





        </Animated.View>
    );
};

const HeadearSection = styled.View`
    margin: 0px 25px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    `

export default Conditions;
