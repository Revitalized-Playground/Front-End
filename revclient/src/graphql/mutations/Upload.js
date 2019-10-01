import gql from 'graphql-tag';




export const UPLOAD_PHOTO = gql`
    mutation UploadPhoto( $picture: Upload! ) {
        uploadImage(picture: $picture) {
            imageUrl
        }
    }
`;



