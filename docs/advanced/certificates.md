# Certificates

If you're running without a public domain name, or managing your own CA, you may want Drop clients to use a non-default Certificate Authority. There are two options to achieve this functionality.

## System certificates

Drop loads certificates from the system trust chain. Add your CA certificate to the platform-specific store, and Drop will load it at startup.

## `certificates` directory

Drop optionally loads PEM certificates from all files within a `certificates` directory placed in Drop's data directory. Drop can load more than one certificate from a file, and only does so at startup.
