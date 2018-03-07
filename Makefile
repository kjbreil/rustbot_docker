NS = kjbreil

REPO = rustbot

VERSION ?= $(shell date +'%Y.%m.%d')

.PHONY: 

default: build

build:
	docker build -t $(NS)/$(REPO) -t $(NS)/$(REPO):$(VERSION) .

clean:
	docker build --no-cache -t $(NS)/$(REPO) -t $(NS)/$(REPO):$(VERSION) .

shell:
	docker run --rm --name lgsm-test -it $(NS)/$(REPO) /bin/bash

run:
	docker run --rm --name lgsm-test $(NS)/$(REPO)

push:
	docker push $(NS)/$(REPO):$(VERSION)
	docker push $(NS)/$(REPO)

