FROM httpd
COPY ./game_code/files* /usr/local/apache2/htdocs/
COPY ./game_code/config_file/httpd.conf /usr/local/apache2/conf/httpd.conf