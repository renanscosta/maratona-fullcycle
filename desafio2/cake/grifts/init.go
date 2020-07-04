package grifts

import (
  "github.com/gobuffalo/buffalo"
	"cake/actions"
)

func init() {
  buffalo.Grifts(actions.App())
}
