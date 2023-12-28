(module
    (import "js" "display" (func $display (param i32)))
    (func (export "add") (param $a i32) (param $b i32)
        local.get $a
        local.get $b
        i32.add
        call $display
    )
)