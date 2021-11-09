#!/bin/bash
# Import DoD root certificates into linux CA store

main() {
    # Location of bundle from DISA site
    bundle=https://dl.dod.cyber.mil/wp-content/uploads/pki-pke/zip/certificates_pkcs7_DoD.zip


    # Extract the bundle
    cd /usr/local/share/ca-certificates
    wget -qP tmp $bundle
    unzip -qj tmp/${bundle} -d tmp

    # Convert the PKCS#7 bundle into individual PEM files
    openssl pkcs7 -print_certs -in tmp/*.pem.p7b |
        awk 'BEGIN {c=0} /subject=/ {c++} {print > "cert." c ".pem"}'

    # Rename the files based on the CA name
    for i in *.pem; do
        name=$(openssl x509 -noout -subject -in $i |
               awk -F '(=|= )' '{gsub(/ /, "_", $NF); print $NF}'
        )
        mv $i ${name}.crt
    done

    # Remove temp files and update certificate stores
    rm -fr tmp
    update-ca-certificates
}

# Only execute if not being sourced
[[ ${BASH_SOURCE[0]} == "$0" ]] && main "$@"