require "test_helper"

class AutomationsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get automations_index_url
    assert_response :success
  end
end
