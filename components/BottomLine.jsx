export default function BottomLine() {
  return (
    <div className="my-14">
      <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 border border-pink-100">
        <h3 className="text-center font-bold text-gray-900 mb-4">The Bottom Line</h3>
        <div className="grid grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-xl font-bold text-pink-500">$0</div>
            <div className="text-xs text-gray-500">Free tier</div>
          </div>
          <div>
            <div className="text-xl font-bold text-purple-500">4.9/5</div>
            <div className="text-xs text-gray-500">Customer rating</div>
          </div>
          <div>
            <div className="text-xl font-bold text-pink-500">20 min</div>
            <div className="text-xs text-gray-500">Setup time</div>
          </div>
          <div>
            <div className="text-xl font-bold text-purple-500">Unlimited</div>
            <div className="text-xs text-gray-500">Team seats</div>
          </div>
        </div>
      </div>
    </div>
  )
}
