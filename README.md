🥠🔮 O! Fortuna!
================

This is **O! Fortuna**, an example application to make playing
with Kubernetes and operationalization of sometimes
non-cooperative software more fun!

(It does nothing useful, by the way.)

To run it:

    docker run -it --rm --name o-fortuna \
           -p 3000:3000 \
           filefrog/o-fortuna:latest

If you want your own fortunes, rather than the stock ones:

    cat > fortunes.js <<EOF
    module.exports = [
      'Have a nice day.',
      'Long live the revolution!',
      'A bug in the code is worth two in the documentation.',
    ];
    EOF

    docker run -it --rm --name o-fortuna \
           -p 3000:3000 \
           -v $PWD/fortunes.js:/fortunes.js:ro \
           filefrog/o-fortuna:latest
