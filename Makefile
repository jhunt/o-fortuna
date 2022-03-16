IMAGE ?= filefrog/o-fortuna

build:
	docker build -t $(IMAGE) .

push: build
	docker push $(IMAGE)
