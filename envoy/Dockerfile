FROM envoyproxy/envoy

ADD ./etc/ /etc/

EXPOSE 9000
EXPOSE 9001

CMD /usr/local/bin/envoy -c /etc/envoy.yaml --service-cluster front-proxy