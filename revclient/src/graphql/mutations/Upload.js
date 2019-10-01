import gql from 'graphql-tag';




export const UPLOAD_PHOTO = gql`
    mutation UploadPhoto( $file: Upload! ) {
        uploadImage(picture: $file) {
            imageUrl
        }
    }
`;



