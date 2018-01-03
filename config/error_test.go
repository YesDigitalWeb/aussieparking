package config

import (
	"errors"
	"os"
	"testing"

	"github.com/stvp/rollbar"
)

func TestReportError(t *testing.T) {
	rollbar.ErrorWriter = os.Stderr
	ReportError(errors.New("test error"))
	rollbar.Wait()
}
