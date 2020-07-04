package actions

import (
    "net/http"
    
	"github.com/gobuffalo/buffalo"
)

// HelloShow default implementation.
func HelloShow(c buffalo.Context) error {
	return c.Render(http.StatusOK, r.HTML("hello/show.html"))
}

// HelloIndex default implementation.
func HelloIndex(c buffalo.Context) error {
	return c.Render(http.StatusOK, r.HTML("hello/index.html"))
}

// HelloCreate default implementation.
func HelloCreate(c buffalo.Context) error {
	return c.Render(http.StatusOK, r.HTML("hello/create.html"))
}

