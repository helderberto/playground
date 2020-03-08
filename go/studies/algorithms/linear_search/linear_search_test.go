package linearsearch

import "testing"

// test linear search function
func TestLinearSearch(t *testing.T) {
	items := []int{95, 78, 46, 58, 45}

	found := LinearSearch(items, 58)    // => should return true because 58 exists in items
	notFound := LinearSearch(items, 20) // => should return false because 20 not found in items

	if !found {
		t.Fatalf("LinearSearch failed, not found key")
	}

	if notFound {
		t.Fatalf("LinearSearch failed, found key")
	}
}
